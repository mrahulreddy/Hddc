import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GdoConfigComponent} from "../../gdo-config/gdo-config.component";
import {GdoOpener} from "../../opener/gdoOpener";
import {AppUtilities} from "../appUtilities";
declare var $:any;
declare var _:any;

@Component({
    selector: 'app-slider-component',
    templateUrl: './slider-component.component.html',
    styleUrls: ['./slider-component.component.less']
})
export class SliderComponentComponent implements OnInit {

    constructor(private gdoConfig:GdoConfigComponent
        , private utils:AppUtilities) {
    }

    @Input() data:any;
    @Input() count:any;
    @Input() number:any;

    sliderRows;

    @Output() notify = new EventEmitter<GdoOpener>();

    ngOnInit() {
        console.log(this.data);
        if (this.data) {
            this.sliderRows = _.times(this.data.length, _.constant(null));
            this.slideCount = this.data ? this.data.length : 0;
        }
        this.renderSlider();
        if(this.utils.utilities.gdoOpenerSelectedItm !== null){
            // $('img').attr('data-id').addClass('current');
        }
    }

    sliderWidth = 0;
    slideWidth = 0;
    slideCount = this.data ? this.data.length : 0;
    sliderLeft = 0;
    touchStart = false;
    touchX = 0;
    oldX = 0;

    itm;

    renderSlider() {
        this.slideWidth = $('._slider-container').width();
        this.sliderWidth = this.data.length * this.slideWidth;

        $('._slider').on('touchstart', (e) => {
            this.touchStart = true;
            this.touchX = e.touches[0].clientX;
            this.oldX = this.sliderLeft;
        });
        $(document).on('touchmove', (e) => {
            var dir = this.touchX - e.touches[0].clientX;
            if (dir > 0) {
                if (Math.abs(this.sliderLeft) <= (this.sliderWidth - (2 * this.slideWidth))) {
                    this.sliderLeft = -(Math.abs(this.oldX) + dir);
                }
            } else {
                if (this.sliderLeft < 0) {
                    this.sliderLeft = -(Math.abs(this.oldX) + dir);
                }
            }
        });
        $('._slider').on('touchend', (e) => {
            this.touchStart = false;
            this.touchX = 0;
            this.setSlide();
        });
    }

    setSlide() {
        var sliderIndex = Math.round(Math.abs(this.sliderLeft) / this.slideWidth);
        this.sliderLeft = -(sliderIndex * this.slideWidth);
    }

    openerSelected(obj, event) {
        $('._slide-items img').removeClass('current');
        this.gdoConfig.itemPrice = obj.item_price;
        this.gdoConfig.gdoBanner = obj.item_thumbnail;
        event.currentTarget.classList.add('current');
        this.utils.utilities.gdoOpenerSelectedItm = obj.item_id;
        this.notify.emit(obj);

    };
}

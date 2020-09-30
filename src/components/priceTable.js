import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function priceTable() {
    return (
        <section id="priceTableSlideshow">
    
        <div class="pricing pricing-palden">
            <div class="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-0" style={{minHeight: '497px'}}>
                <div class="pricing-deco priceBgGreen">
               
                    <div class="pricing-price"><span class="pricing-currency">€</span>25
                        <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">3 Months plan</h3>
                </div>
                <ul class="pricing-feature-list px-4 greenSvg">
                    <li class="pricing-feature"><FaCheckCircle /> Get Acces toy uoyr Riderz Area on any device</li>
                    <li class="pricing-feature"><FaCheckCircle /> Upload your Invoices, control your incomes, chat with personal advisor.</li>
                    <li class="pricing-feature"><FaCheckCircle /> Get access a personalized summary of your activity, you have the control.</li>
                </ul>
                <button class="pricing-action priceGreenBtn">Choose plan</button>
            </div>
            <div class="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style={{minHeight: '497px'}}>
                <div class="pricing-deco priceBgBlue" >
                 
                    <div class="pricing-price"><span class="pricing-currency">€</span>10
                        <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">Monthly Plan</h3>
                </div>
                <ul class="pricing-feature-list px-4 blueSvg">
                <li class="pricing-feature"><FaCheckCircle /> Get Acces toy uoyr Riderz Area on any device</li>
                    <li class="pricing-feature"><FaCheckCircle /> Upload your Invoices, control your incomes, chat with personal advisor.</li>
                    <li class="pricing-feature"><FaCheckCircle /> Get access a personalized summary of your activity, you have the control.</li>
                </ul>
                <button class="pricing-action priceBlueBtn">Choose plan</button>
            </div>
            <div class="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-2" style={{minHeight: '497px'}}>
                <div class="pricing-deco priceBgOrange">
               
                    <div class="pricing-price"><span class="pricing-currency">€</span>99
                        <span class="pricing-period">/ mo</span>
                    </div>
                    <h3 class="pricing-title">Anual Plan</h3>
                </div>
                <ul class="pricing-feature-list px-4 orangeSvg">
                <li class="pricing-feature"><FaCheckCircle /> Get Acces toy uoyr Riderz Area on any device</li>
                    <li class="pricing-feature"><FaCheckCircle /> Upload your Invoices, control your incomes, chat with personal advisor.</li>
                    <li class="pricing-feature"><FaCheckCircle /> Get access a personalized summary of your activity, you have the control.</li>
                </ul>
                <button class="pricing-action priceOrangeBtn">Choose plan</button>
            </div>
        </div>
    </section>
    )
}

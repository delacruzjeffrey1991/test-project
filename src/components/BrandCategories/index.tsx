import React, { useState } from "react";
import global from '../../global.module.scss'
import Styles from './styles.module.scss'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

function BrandCategories() {
    return (
        <>
            <div>
                <ul className={`${global.dflexCenter} ${Styles.mainCategories}`}>
                    <li className={`${global.dflexCenter} ${Styles.active}`}> <span>Plan</span>  <span className={Styles.iconDown}> <MdOutlineArrowForwardIos /> </span> </li>
                    <li className={`${global.dflexCenter}`}> <span>Position</span> <span className={Styles.iconDown}> <MdOutlineArrowForwardIos /> </span> </li>
                    <li className={`${global.dflexCenter}`}> <span>Possess</span> <span className={Styles.iconDown}> <MdOutlineArrowForwardIos /> </span></li>
                </ul>
            </div>
            <div>
                <div>
                    <ul className={`${Styles.subCategories} ${Styles.active}`}>
                        <li>Target Audience</li>
                        <li>Core Value</li>
                        <li>Purpose</li>
                        <li>Beliefs</li>
                        <li>Mission</li>
                        <li>Employer Brand Promise</li>
                        <li>Brand Audit</li>
                    </ul>
                    <ul className={`${Styles.subCategories}`}>
                        <li>Goals</li>
                    </ul>
                    <ul className={`${Styles.subCategories}`}>
                        <li>Tactics</li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default BrandCategories;

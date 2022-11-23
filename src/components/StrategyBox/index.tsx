import React from "react";
import global from '../../global.module.scss'
import Styles from './styles.module.scss'
import { TbEdit } from 'react-icons/tb'
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";

function StrategyBox(props:any) {
    return (
        <div className={Styles.strategyBox}>
            <div className={Styles.strategyImg}>
                <div className={global.roundImg40}>
                    <img src={props.image} alt='Question' className={global.fullImg} />
                </div>
            </div>
            <div className={Styles.strategyText}>
                <div className={`${Styles.headingBox} ${global.grayBox}`}>
                    <Heading label={props.heading} color='secondaryText' />
                </div>
                {
                    props.question? 
                    <div className={Styles.questionBox}>
                        <p> {props.question} </p>
                    </div> : ''
                    
                }
                {
                    props.answer?
                    <div className={`${Styles.ansBox} ${global.grayBox}`}>
                        <p> {props.answer} </p>
                        <span className={Styles.editIcon}>
                            <IconButton icon={<TbEdit />} />
                        </span>
                    </div> : ''
                }
            </div>
        </div>
    );
}



export default StrategyBox;

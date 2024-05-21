import React, {JSX, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const PageResult = () => {
    const naviGate = useNavigate();
//    const startPage = () => {
//
//    };
   const retry =  window.confirm('ここではさらなる地獄があなたを待っています。\r\n道中の選択肢で別の選択をしてみましょう');
    if(retry){
        naviGate('/page2')
    }else{
        naviGate('/');
    }
    return (
        <>
            {/*<div className={'PageResult'}></div>*/}
        </>
    );
};
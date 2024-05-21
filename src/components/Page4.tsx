import {useNavigate} from 'react-router-dom';
import React, {Component} from 'react';
import VideoComp from './videoComp';
export const Page4 = () => {
    let punishCount: number = 0;
    let punishArr: string[] = [];
    let isFistAccessTo1: boolean = true;
    let isFistAccessTo2: boolean = true;
    let isFistAccessTo3: boolean = true;
    const flagArr = [isFistAccessTo1, isFistAccessTo2, isFistAccessTo3];
    const naviGate = useNavigate();
    const finalPunish = () => new Promise<void>(async (resolve) => {
        const punish = () => {
            if (punishArr[0] === 'も') {
                window.alert('もとしレクイエム！！');
            } else if (punishArr[0] === 'と') {
                window.alert('今ドイツ中！！');
            } else {
                window.alert('松bridgeの逆襲');
            }
            flagArr.forEach((flag) => flag = true);
            console.log(flagArr);
            punishCount = 0;
            punishArr = [];
            console.log(punishCount);
            console.log(punishArr);
            resolve();
        };
        await punish();
        setTimeout(() => {
            naviGate('/');
        }, 1000);
    });
    const punish1 = () => new Promise<void>(async (resolve) => {
        if (isFistAccessTo1) {
            isFistAccessTo1 = false;
            punishCount += 1;
            punishArr.push('も');
            window.alert('お"え"っ');
            if (punishCount === 3) {
                await finalPunish();
                resolve();
            } else {
                resolve();
            }
        } else {
            window.alert('このお仕置きはもう飽きたらしい...');
            resolve();
        }
    });
    const punish2 = () => new Promise<void>(async (resolve) => {
        if (isFistAccessTo2) {
            isFistAccessTo2 = false;
            punishCount += 1;
            punishArr.push('と');
            window.alert('チック症~~~');
            if (punishCount === 3) {
                await finalPunish();
                resolve();
            } else {
                resolve();
            }
        } else {
            window.alert('このお仕置きはもう飽きたらしい...');
            resolve();
        }
    });
    const punish3 = () => new Promise<void>(async (resolve) => {
        if (isFistAccessTo3) {
            isFistAccessTo3 = false;
            punishCount += 1;
            punishArr.push('し');
            window.alert('さくらいもとし太郎さーん');
            if (punishCount === 3) {
                await finalPunish();
                resolve();
            } else {
                resolve();
            }
        } else {
            window.alert('このお仕置きはもう飽きたらしい...');
            resolve();
        }
    });
    return (
        <>
            <div>
                <h1>ここはキングもとしの診療所</h1>
                <p>お仕置きを選択</p>
                <button onClick={punish1}>第1のお仕置き</button>
                <button onClick={punish2}>第2のお仕置き</button>
                <button onClick={punish3}>第3のお仕置き</button>
                <VideoComp/>
            </div>
        </>
    );
};


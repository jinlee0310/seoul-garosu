import React from 'react';
import { Header,Section } from '../style/style';





const CaretreeIntroduce = () => {
    return (
        <div>
            <Header>
                <h1 style={{color:"white"}}>나무 돌보미란?</h1>
                <div>
                    스스로 나무를<br/>
                    아름답고 깨끗하게 <br/>
                    가꾸어 나가는 자원봉사 활동입니다.
                </div>
            </Header>
            <Section>
                <h2>지원사항</h2>
                <p className="sub-title">    (나무를 돌보면 어떤 혜택이 있을까요?)</p>
                <p>보도 내 돌보미 단체의 이름과 로고가 새겨진 
                표지판을 설치해드립니다!</p>
                보도 내 돌보미 단체의 이름과 로고가 새겨진 표지판 설치
                자원봉사활동시간을 인정
                청소용품(쓰레기 봉투, 집게 등) 제공
                수목해설프로그램 지원
                <h2>참여방법</h2>
                <p className="sub-title">개인참여</p>
                내 집 또는 건물 앞에 위치한 가로수를 선정한 후 해당 구청 공원녹지과에 신청
                어린이, 청소년은 보호자가 동반하여 신청하고 참여
                1인당 가로수 최대 5주 신청 가능
                최소 월 2회 이상 정기적으로 가꾸고 활동내역을 해당 구청에 서면으로 제출하면 확인 후 자원봉사실적 인정
                <p className="sub-title">단체참여</p>
                일반녹지대, 쉼터, 동네숲, 마을마당 등 소규모 이상의 시설물이 설치된 공간과 가로수와 띠녹지가 있는 비교적 규모가 큰 대로변 가로구간 등을 선정
                기업, 시민단체, 종교단체, 마을공동체, 주민모임, 공공기관 등 다수가 참여하는 단체를 말하며, 참여인원과 안전을 고려하여 입양구간(또는 공간) 선정은 해당 구청과 협의
                <p className="sub-title">학교참여</p>
                참여인원과 활동구간(학교 통학로에 위치한 가로수, 띠녹지 수목 등)을 해당 구청과 협의하여 관리협약을 체결한 후 학생들이 가꿀 수 있도록 함
                활동 전에 위험요소를 확인하고, 활동 시 담당 교사, 교직원 등을 배치하여 안전하게 활동이 이루어질 수 있도록 해야 함
                자원봉사 활동 증명이 필요할 경우 해당 구청과 협의
            </Section>
        </div>
    );
};

export default CaretreeIntroduce;
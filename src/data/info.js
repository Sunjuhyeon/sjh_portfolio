const info = {
    hddb:{
        topad: {
            adtitle: "Github 들어가서 작업능력 알아보기"
            , adsub: "클릭 시 깃 주소로 이동"
            , adlink: "https://github.com/dongsam-E"
        }
        , navi: [
            , {
                nm: ["보유 역량", "#skills"]
                , cls: "skills"
            }
            , {
                nm: ["포트폴리오", "#portfolio"]
                , cls: "portfolio"
            }
            , {
                nm: ["사전 인터뷰", "#interview"]
                , cls: "interview"
            }
            , {
                nm: ["면접 제안", "#contact"]
                , cls: "contact"
            }
        ]
        , sns: [
            {
                adtitle: "Github"
                // ,cls: "bi bi-github"
                ,src0: "img/github_logo2.png"
                ,src1: "img/github_logo0light.png"
                , adlink: "https://github.com/dongsam-E/react-test"
            }
            , {
                adtitle: "Kakao"
                // ,cls: "bi bi-journal"
                ,src0: "img/kakao.png"
                ,src1: "img/kakao0light.png"
                , adlink: "https://www.notion.so/dongsam-e/array-for-for-in-navi-66ed171b2f204f6fa9884aae1e57f9c9?pvs=4"
            }
        ]
    }
    ,aboutdb:{
        icon: [
            {
                title: "이름"
                , i: "bi bi-person-fill"
                , content: "선주현"
            }
            , {
                title: "생년월일"
                , i: "bi bi-calendar-fill"
                , content: "97.12.15"
            }
            , {
                title: "학력"
                , i: "bi bi-pencil-fill"
                , content: "숙명여자대학교(졸)"
            }

        ]
    }
    ,skillsdb:{
        skills: [
            {
                title: "FrontEnd"
            , boxCls: ""
            , img: "../img/skillFront.png"
            , imgcls: "w-100 mx-auto"
        }
            , {
                title: "Version Control"
            , boxCls: ""
            , img: "../img/skillVersion.png"
            , imgcls: "w-75 mx-auto"
        }
            , {
                title: "Communication"
            , boxCls: ""
            , img: "../img/skillCommu.png"
            , imgcls: "w-75 mx-auto"
        }
            , {
                title: "Certificate"
            , boxCls: ""
            , img: "../img/skillCert.png"
            , imgcls: "w-50 mx-auto"
        }
        ]
    }
    ,portdb:{
        card: [
            {
                subtitle: "Web-App"
                , title: `"반응형 최적화"`
                , title2: `온가담 광고페이지`
                , hash: "#jquery #scss"
                , more: "홈페이지 바로가기"
                , img: "https://dummyimage.com/1000X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: "기획"
                , title: "신뢰감과 미니멀을 테마로 기획."
                , hash: "#pigma #zeplin"
                , more: "피그마작업 바로가기"
                , img: "https://dummyimage.com/1000X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: "page1"
                , title: "상단페이지"
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1000X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: "page2"
                , title: "중간페이지"
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1000X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: "page3"
                , title: "하단페이지"
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1000X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
        ]
        , card2: [
            {
                subtitle: "Web-App"
                , title: `"리액트"로 만든 포트폴리오`
                , hash: "#react #gitpage"
                , more: "자세히보기"
                , img: "https://dummyimage.com/1200X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: "pb-5"

            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1200X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1200X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1200X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "https://dummyimage.com/1200X600/a8a8a8/ffffff"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
        ]
    }
    ,interviewdb:{
        accordion: [
            {
                Q: "관현악과에서 다른 진로를 선택한 이유가 뭔가요? 개발자가 되고싶었던 계기는?"
                , A: "연주와 코딩에는 공통점이 있습니다. 매일매일 성실히 임한 태도.."
                , key: "0"
            }
            , {
                Q: "리액트 관련 깃 저장소의 단위가 프로젝트 단위가 아닌 컴포넌트 단위던데 그 이유는?"
                , A: "개인프로젝트 위주로 작업하였지만 협업에 익숙해지기 위해."
                , key: "1"
            }
            , {
                Q: "부트스트랩과 같은 프레임워크를 어느정도 다룰 수 있는지? 프레임워크를 주로 사용하여 하드코딩 능력이 상대적으로 떨어지진 않는지?"
                , A: "프레임워크 사용으로 오해받기 쉬운 하드코딩 능력을 인정받기위해 실무와는 살짝 거리가 있는 웹기능사 취득. <br> 포트폴리오 페이지의 폼태그 역시 hook을 사용하여 작성할 수 있었지만 하드코딩으로 작성해보았다."
                , key: "2"
            }
            , {
                Q: "코드 작성 시 막히는 부분이 생기면 어떻게 해결하나요?"
                , A: ""
                , key: "2"
            }
            , {
                Q: "프로젝트를 진행하면서 어려웠던 점은?(노션 관련)"
                , A: "배움과 동시에 취업을 준비하다보니 프로젝트 스케줄 관리가 특히 어려웠습니다. <br> 프로젝트에 오롯이 집중할 수 있는 시간이 상대적으로 적어서 노션을 사용하여 프로젝트 이슈에 대한 중요도를 부여하고 우선순위에 맞게 이슈처리를 하였습니다."
                , key: "2"
            }
        ]
    }
    ,contactdb:{
        checkbox: [
            {
                name: "Front-End"
                , title: "프론트엔드"
                , value: "프론트엔드"
            }
            , {
                name: "publisher"
                , title: "퍼블리셔"
                , value: "퍼블리셔"
            }
            , {
                name: "provider"
                , title: "기획/마케팅"
                , value: "기획/마케팅"
            }
            , {
                name: "designer"
                , title: "디자인"
                , value: "디자인"
            }
        ]
        , data: [
            {
                type: "text"
                , placeholder: "회사 명"
                , inputCls: "w-100"
                , name: "company"
            }
            , {
                type: "text"
                , placeholder: "담당자 명"
                , inputCls: "w-100"
                , name: "name"
            }
            , {
                type: "tel"
                , placeholder: "대표 번호"
                , inputCls: "w-100"
                , name: "num"
            }
            , {
                type: "text"
                , placeholder: "제안 내용"
                , inputCls: "w-100"
                , name: "text"
            }

            // , {
            //     title: "연락처"
            //     , i: "bi bi-telephone-fill"
            //     , content: "010-2774-6352"
            // }
            // , {
            //     title: "이메일"
            //     , i: "bi bi-envelope-at-fill"
            //     , content: "dong2dong32@gmail.com"
            // }
        ]
        , submit: [
            , {
                type: "checkbox"
                , liCls: "d-flex justify-content-end py-3"
                , inputCls: ""
                , id: "policy"
                , value: "policy"
                , for: "policy"
                , label: "개인정보정책 약관 동의"
                , labelCls: "d-flex align-items-center"
            }
            , {
                type: "submit"
                , liCls: ""
                , inputCls: "w-100"
                , value: "면접 제안하기"
            }
        ]
    }
}

export default info
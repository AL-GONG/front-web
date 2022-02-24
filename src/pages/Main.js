const Main = `
    <div class="main-container">
        <div class="main-component">
            <h1><알공></h1>
            <p>
                알고리즘 스터디를 가장 쉽게 시작할 수 있는 곳
            </p>
            <github-login></github-login>
        </div>
    </div>
    <style>
        .main-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 85vh;
        }
        .main-component {
            width: 500px;
            margin: auto;
            padding: 30px;
        }
        .main-component h1 {
            text-align: center;
        }
    </style>
`;

export default Main;
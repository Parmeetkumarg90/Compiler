    // personal api using fetch async await
    function printing(result) {
        const user_output = document.querySelector("#user_output");
        user_output.innerText = "";
        user_output.value = (result.Result === null ? result.Errors : result.Result);
    }
    const but = document.getElementById("codeRunner");
    function runcode() {
        const user_choice = document.querySelector("#select_element");
        const user_code = document.querySelector("#user_code");
        if(user_code.value === ""){
            printing({Result:"Please enter code of this this language to compiler it."});
            return;
        }
        const url = 'https://code-compiler.p.rapidapi.com/v2';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
                'x-rapidapi-key': 'dce7427ef0msh665df1d69ed36a7p12a111jsn51a30b79b3fb'
            },
            body: new URLSearchParams({
                LanguageChoice: `${parseInt(user_choice.value)}`,
                Program: `${user_code.value}`,
                Input: `${prompt("Enter all Input for this program(If any Otherwise Empty)")}`
            })
        };
        async function func() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                //console.log(JSON.stringify(result.Errors));
                printing(result);
            } catch (error) {
                console.error(error);
            }
        }
        func();
    }
    but.addEventListener('click', runcode);


    // codequotient api using XMLHttpRequest
    // function printing(result) {
    //     const user_output = document.querySelector("#user_output");
    //     user_output.innerText = "";
    //     user_output.value = (result.Result === null ? result.Errors : result.Result);
    // }
    // const but = document.getElementById("codeRunner");
    // function runcode() {
    //     const user_choice = document.querySelector("#select_element");
    //     const user_code = document.querySelector("#user_code");
    //     var request = new XMLHttpRequest();
    //     request.open("POST", "https://codequotient.com/api/executeCode");
    //     request.setRequestHeader("Content-Type", "application/json");
    //     request.send(JSON.stringify({ "code": user_code, langId: user_choice }));
    //     request.addEventListener('load', () => {
    //         const codeId = JSON.parse(request.responseText).codeId;
    //         //get request to server
    //         var result = setTimeout(() => {
    //             let getrequest = new XMLHttpRequest();
    //             getrequest.open("GET", "https://codequotient.com/api/codeResult/" + codeId);
    //             getrequest.send();
    //             getrequest.addEventListener('load', () => {
    //                 if (getrequest.readyState == 4) {
    //                     var data = JSON.parse(JSON.parse(getrequest.responseText).data);
    //                     // console.log(data);
    //                     printing(data.output);
    //                 }
    //             });
    //         }, 3000);
    //     });
    // }
    // but.addEventListener('click', runcode);

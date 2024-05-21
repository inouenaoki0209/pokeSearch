   export let nameValue:string

    const LogIn = () => {
        if(nameValue === 'inoue'){
            alert('inoue0209 にログインします')
        }else if(nameValue !== 'inoue'){
            alert('ユーザー名が違います')
        }
    }

    export {LogIn}

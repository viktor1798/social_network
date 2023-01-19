let state = {
    dialogsPage: {
        messageData: [{ id: 1, message: 'Hi' },
            { id: 2, message: 'Go dota2' },
            { id: 3, message: 'or go to run' },
            { id: 4, message: 'FY' },
            { id: 5, message: 'test' },
        ],
         dialogUserData: [
            { id: 1, name: 'Victor' },
            { id: 2, name: 'Lesha' },
            { id: 3, name: 'Kolya' },
            { id: 4, name: 'Evdokia' },
        ]
    },
    profilePage:{
        postData:[{ id: 1, message: 'Привет всем', likesCount: 20 },
        { id: 2, message: 'Кто,Я?', likesCount: 22 },
    ]
    }
}


export let addPost=(addNewPost)=>{
    let newPost ={
        id:3,
        message:addNewPost,
        likesCount:0,
    }
    state.profilePage.postData.push(newPost)
}



export default state;
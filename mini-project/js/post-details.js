let post = JSON.parse(localStorage.getItem('post'));
let conteiner = document.createElement('div');
conteiner.classList.add('conteiner');
let postConteiner = document.createElement('div');
postConteiner.classList.add('postConteiner');
for (const postKey in post) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('postDiv');
    postDiv.innerText = `${postKey}: ${post[postKey]}`;
    postConteiner.append(postDiv);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let commentsBox = document.createElement('div');
        commentsBox.classList.add('commentsBox');
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            for (const commentKey in comment) {
                let keyDiv = document.createElement('div');
                keyDiv.classList.add('keyDiv');
                keyDiv.innerText = `${commentKey}: ${comment[commentKey]}`
                commentDiv.append(keyDiv);
            }
            commentsBox.append(commentDiv);
        }

        conteiner.append(commentsBox);
    });

conteiner.append(postConteiner);
document.body.append(conteiner);
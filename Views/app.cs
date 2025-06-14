* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto 0;
    display: flex;
    gap: 1rem;
    justify-content: start;
    align-items: start;
    padding: 1rem;
}


.editor {
    width: 100%;
    max-width: 100%;
    height: calc(100vh - 13rem);
}


.output {
    height: calc(100vh - 6.9rem);
    transition: all 1s ease;
    width: 0%;
    max-width: 0%;
    padding: 1rem;
}


.output.active {
    width: 100%;
    max-width: 100%;
    border: 1px solid #ccc;


}


.btn {
    padding: .5rem 1rem;
    color: white;
    margin-top: 1rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
}
.preview-button {
    background-color: rgba(55, 68, 71, 0.276);
}
.save-button {
    background-color: rgb(87, 171, 194);
}






.output img {
    width: 100%;
}

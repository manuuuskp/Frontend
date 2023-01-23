const replyBtn = document.querySelector(".reply");
const addCommentTemp = document.querySelector(".addComment");
const commentTemp = document.querySelector(".commentTemp");

const onClickReply = (e) => {
  const addCommentClone = addCommentTemp.content.cloneNode(true);
  const targetelm = e.target.closest(".mainComment").nextElementSibling;
  targetelm.append(addCommentClone);
  targetelm.querySelector(".cancel").addEventListener("click", onClickCancel);
  targetelm.querySelector(".post").addEventListener("click", onClickPost);
};

const onClickCancel = (e) => {
  const targetElm = e.target.closest(".commentContainer");
  targetElm.remove();
};

const onClickEdit = (e) => {
  const mainContainer = e.target.closest(".mainComment");
  const target = mainContainer.querySelector("p");
  target.setAttribute("contentEditable", true);
  target.focus();
  mainContainer.querySelector(".reply").setAttribute("disabled", true);
  mainContainer.querySelector(".delete").setAttribute("disabled", true);
  mainContainer.querySelector(".edit").classList.add("none");
  mainContainer.querySelector(".save").classList.remove("none");
};

const onClickDelete = (e) => {
  e.target.closest(".comment").remove();
};

const onClickSave = (e) => {
  const mainContainer = e.target.closest(".mainComment");
  const target = mainContainer
    .querySelector("p")
    .removeAttribute("contentEditable");
  mainContainer.querySelector(".reply").removeAttribute("disabled");
  mainContainer.querySelector(".delete").removeAttribute("disabled");
  mainContainer.querySelector(".save").classList.add("none");
  mainContainer.querySelector(".edit").classList.remove("none");
};

const onClickPost = (e) => {
  const name = e.target
    .closest(".commentContainer")
    .querySelector(".nameInput").value;
  const commentVal = e.target
    .closest(".commentContainer")
    .querySelector(".commentInput").value;
  const subTarget = e.target.closest(".comment");
  const targetElm = e.target.closest(".commentContainer");
  targetElm.remove();
  const commentTempClone = commentTemp.content.cloneNode(true);
  commentTempClone.querySelector(".mainComment > span > b").textContent = name;
  commentTempClone.querySelector(".mainComment > p").textContent = commentVal;

  subTarget.append(commentTempClone);

  subTarget.querySelector(".reply").addEventListener("click", onClickReply);
  subTarget.querySelector(".edit").addEventListener("click", onClickEdit);
  subTarget.querySelector(".delete").addEventListener("click", onClickDelete);
  subTarget.querySelector(".save").addEventListener("click", onClickSave);
};

replyBtn.addEventListener("click", onClickReply);

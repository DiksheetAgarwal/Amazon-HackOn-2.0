// Submit avatar url will save the avatar url in the session storage
function submit_avatar_url() {
    avatar_url = document.getElementById("avatar_url").value
    sessionStorage.setItem("avatar_url", avatar_url)
    window.location.href = "/avatar_render"
}

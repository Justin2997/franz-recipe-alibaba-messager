module.exports = (Franz) => {
    function getMessages() {
      let count = document.getElementsByClassName("avatar-unread")[0].innerHTML;
      if(Number(count))
        Franz.setBadge(Number(count), 0);
    }
    Franz.loop(getMessages);
  }
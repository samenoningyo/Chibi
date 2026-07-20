function showContent(section) {
  const title = document.getElementById('title');
  const text = document.getElementById('text');
  const leftSide = document.getElementById('left-side');

  if (section === 'home') {
    title.innerHTML = "よこそう！！";
    text.innerHTML = "こんにちは, サメです！！（^人^）<br>I like Japan, drawing, singing & dancing.<br>では, check my <a href='https://youtube.com/@smolshark7?si=FMODBuhiqATn-qWH'>YouTube channel</a>.<br>Read my English/Japanese <a href='https://ameblo.jp/chibizame2010/'>Ameblo Blog</a>.<br>Be my fan on facebookだよ.<br>ありがとうね！";
    leftSide.innerHTML = "<img src='https://i.postimg.cc/YqywYZm2/IMG-4183.gif'>";
  } else if (section === 'bio') {
    title.innerHTML = "BIOGRAPHY (＞人＜;)";
    text.innerHTML = "Hiii, nice to meet you!<br>My name is Samē, I am 15 years old,<br>my passions are Japan and arts,<br>which includes video art, singing, dancing,<br>modeling and so much more…<br>That's why I am learning Japanese and plan to go there someday.<br>Please take a look at my work on youtube<br>and search for me on the Web, pretty please!!<br>ﾖﾂﾊﾞ╰(*´︶`*)╯♡";
    leftSide.innerHTML = "<img src='https://i.postimg.cc/YqywYZm2/IMG-4183.gif'>";
  } else {
    title.innerHTML = section.toUpperCase();
    text.innerHTML = "Coming Soon!!";
    leftSide.innerHTML = "<img src='https://i.postimg.cc/Zqt2LSbQ/IMG-4182.gif'>";
  }
}
window.showContent = showContent;

let bookmarks =

JSON.parse(

localStorage.getItem(
"bookmarks"
)

|| "[]"

);

const list =
document.getElementById(
"bookmarksList"
);

if(
bookmarks.length === 0
){

list.innerHTML =

`
<div class="saved-card">

<h2>
No Saved News Yet
</h2>

<p>
Save articles from NewsFlash to see them here.
</p>

</div>
`;

}

else{

bookmarks.forEach((news,index)=>{

list.innerHTML +=

`
<div class="saved-card">

<h3>
${news.title}
</h3>

<p class="news-date">

📅 News Date:
${news.publishedAt ?
new Date(news.publishedAt)
.toLocaleDateString(
"en-IN"
)
:
"Not Available"}

</p>

<p class="saved-date">

⭐ Saved On:
${news.savedAt ||
"Unknown"}

</p>

<p>

${news.description || ""}

</p>

<div class="saved-actions">

<a
href="${news.url}"
target="_blank"
class="saved-read-btn">

Read Full News

</a>

<button
class="delete-btn"
onclick="deleteBookmark(${index})">

🗑 Delete

</button>

</div>

</div>
`;

});

}

function deleteBookmark(index){

bookmarks.splice(index,1);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

location.reload();

}
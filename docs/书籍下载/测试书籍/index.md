---
aside: false
---

<style>
.book-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.book-card {
  width: 18%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.book-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.book-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.book-author {
  font-style: italic;
  color: #888;
  margin-bottom: 5px;
}

.book-description {
  font-size: 14px;
}

.book-download {
    text-decoration: none; 
    /*color: inherit; */
}

</style>

<div class="book-container">
  <div class="book-card">
<a href="/书籍下载/1.jpg" download style="text-decoration: none;color: inherit; ">
    <img src="/书籍下载/1.jpg" alt="Book 1" class="book-image">
    <div class="book-title">Book 1</div>
    <div class="book-author">Author 1</div>
    <div class="book-description">Description 1</div>
</a>
  </div>
  <div class="book-card">
<a class="book-download" href="/书籍下载/1.jpg" download >
    <img src="/书籍下载/1.jpg" alt="Book 2" class="book-image">
    <div class="book-title">Book 2</div>
    <div class="book-author">Author 2</div>
    <div class="book-description">Description 2</div>
</a>
  </div>
  <!-- 添加更多书籍卡片 -->
  <div class="book-card">
    <img src="/书籍下载/1.jpg" alt="Book 1" class="book-image">
    <div class="book-title">Book 1</div>
    <div class="book-author">Author 1</div>
    <div class="book-description">Description 1</div>
  </div>
  <div class="book-card">
    <img src="/书籍下载/1.jpg" alt="Book 1" class="book-image">
    <div class="book-title">Book 1</div>
    <div class="book-author">Author 1</div>
    <div class="book-description">Description 1</div>
  </div>
  <div class="book-card">
    <img src="/书籍下载/1.jpg" alt="Book 1" class="book-image">
    <div class="book-title">Book 1</div>
    <div class="book-author">Author 1</div>
    <div class="book-description">Description 1</div>
  </div>
  <div class="book-card">
    <img src="/书籍下载/1.jpg" alt="Book 1" class="book-image">
    <div class="book-title">Book 1</div>
    <div class="book-author">Author 1</div>
    <div class="book-description">Description 1</div>
  </div>
</div>


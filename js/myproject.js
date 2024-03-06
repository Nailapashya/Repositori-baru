let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("projectName").value;
  let description = document.getElementById("description").value;
  let nodeJs = document.getElementById("nodeJs").checked;
  let reactJs = document.getElementById("reactJs").checked;
  let apple = document.getElementById("apple").checked;
  let android = document.getElementById("android").checked;
  let image = document.getElementById("image").value; 
  let endDate = document.getElementById("endDate").value;

  let project = {
    title,
    description,
    nodeJs,
    reactJs,
    apple,
    android,
    timePosted: new Date(),
    endDate: new Date(endDate),
    image: "image/chili oil.jpg"
  };

  dataBlogs.push(project);

  renderBlog();
  console.log(dataBlogs);
}

function getTime(project) {
  let inputStartDate = project.timePosted;
  let inputEndDate = project.endDate;
  const oneDay = 24 * 60 * 60 * 1000;
  const day = Math.round(Math.abs(inputStartDate - inputEndDate) / oneDay);

  const month = Math.round(day / 30);
  const years = Math.round(month / 12);

  let days = [];
  if (day < 30) {
    days.push(`${day} Hari`);
  } else if (month < 12) {
    days.push(`${month} bulan`);
  } else {
    days.push(`${years} tahun`);
  }

  console.log(days);
  return days;
}

function renderBlog() {
  let html = '';

  for (let index = 0; index < dataBlogs.length; index++) {
    html +=
      `<div class="card">
        <img src="${dataBlogs[index].image}" class="image" alt="" />
        <a href="blog-detail.html">${dataBlogs[index].title}</a>
        <div class="duration">
          <p>Durasi: ${getTime(dataBlogs[index])}</p>
        </div>
        <p class="text">${dataBlogs[index].description}</p>
        <p class="icon">
          ${dataBlogs[index].nodeJs ? '<i class="fab fa-node-js"></i>' : ''}
          ${dataBlogs[index].reactJs ? '<i class="fab fa-react"></i>' : ''}
          ${dataBlogs[index].apple ? '<i class="fab fa-apple"></i>' : ''}
          ${dataBlogs[index].android ? '<i class="fab fa-android"></i>' : ''}
        </p>
        <div class="btn-card">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </div>`;
  }
  document.getElementById("card-content").innerHTML = html;
}

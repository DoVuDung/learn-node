//class đặt trùng tên
class NewsController {
    //GET /news
    index(req, res) {
        res.render('news'); //phản hồi || controlller tương tác với view
        //view ở đây chính là news -> render news trả về cho browser
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS');
    }
}
//tạo ra một đối tượng và xuất ra ngoài class trên
//đồng thời khởi tạo luôn
module.exports = new NewsController();

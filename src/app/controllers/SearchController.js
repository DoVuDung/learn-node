//class đặt trùng tên
class SearchController {
    //GET /home
    index(req, res) {
        res.render('search');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('ok');
    }
}
//tạo ra một đối tượng và xuất ra ngoài class trên
//đồng thời khởi tạo luôn
module.exports = new SearchController();

module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default' //khi nguoi dung lan dau tien nen ho se khong bam vao, nen type mac dinh la default
    };
    //middleware work
    if (req.query.hasOwnProperty('_sort')) { //new co chuc nang sort se gan lai gia tri sort len
        // res.locals._sort.enabled = true;
        // res.locals._sort.type = req.query.type; //gan lai mot type default ma chung ta truyen tren url
        // res.locals._sort.column = req.query.column;

        Object.assign(res.locals._sort, { //gộp hai object lại với nhau theo thứ tự từ phải sang trái
            enabled: true,
            type: req.query.type,
            column: req.query.column

        });
    }
    next();
}
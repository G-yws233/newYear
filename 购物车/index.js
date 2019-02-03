// 后端提供的数据
var datas = [
    { pName: '飞鸽牌自行车', pCount: 2, price: 200 },
    { pName: 'iPhoneX', pCount: 1, price: 8000 },
    { pName: '飞鸽牌自行车', pCount: 2, price: 200 },
    { pName: '三陵老粗布', pCount: 4, price: 100 },
    { pName: '荣耀8', pCount: 2, price: 1600 },
    { pName: '荣耀9', pCount: 1, price: 2100 },
    { pName: '水杯', pCount: 10, price: 5 },
    { pName: '奶粉', pCount: 30, price: 6 }
];

//   生成表格
$('#btn').click(function () {
    for (var i = 0; i < datas.length; i++) {
        var o = datas[i]
        var $tr = $('<tr></tr>')
        $tr.appendTo('tbody')
        $('<td><input type="checkbox"></td>').appendTo($tr)
        $('<td></td>').text(o.pName).appendTo($tr)
        var $td3 = $('<td></td>');
        $('<button class="reduce">-</button>').appendTo($td3);
        $('<input type="text" readonly>').val(o.pCount).appendTo($td3);
        $('<button class="add">+</button>').appendTo($td3);
        $td3.appendTo($tr);
        $('<td></td>').text(o.price).appendTo($tr);
        $('<td></td>').text(o.price * o.pCount).appendTo($tr);
        $('<td><a href="javascript:" class="del">删除</a></td>').appendTo($tr);
    }
    fn2();
    fn4();
    fn5();
})

//全选
$('#all').click(function () {
    var isC = $(this).prop('checked');
    $('tbody input[type=checkbox]').prop('checked', isC);
    totalPrice();
});

//检测是否全选
function fn2 () {
    $('tbody input[type=checkbox]').click(function () {
        var len1 = $('tbody input[type=checkbox]:checked').length;
        var len2 = $('tbody input[type=checkbox]').length;
        if (len1 == len2) {
            $('#all').prop('checked', true);
        } else {
            $('#all').prop('checked', false);
        }
        totalPrice();
    });
};

//计算总价格
function totalPrice () {
    var sum = 0;
    var $cks = $('tbody input[type=checkbox]:checked');
    for (var i = 0; i < $cks.length; i++) {
        var xiaoji = $cks.eq(i)
            .parent()
            .parent()
            .children()
            .eq(4)
            .text();
        sum = sum + Number(xiaoji);
    }
    $('.total').text(sum);
}

//点击加减按钮
function fn4 () {
    $('.add').click(function () {
        var count = $(this).prev().val();
        count = Number(count) + 1;
        $(this).prev().val(count)
        $(this).parent().prev().prev().find('input').prop('checked', true);
        var price = $(this).parent().next().text();
        $(this).parent().next().next().text(count * price);
        totalPrice();
    });
    $('.reduce').click(function () {
        var count = $(this).next().val();
        count = Number(count) - 1;
        if (count < 1) {
            count = 1;
        }
        $(this).next().val(count)
        $(this).parent().prev().prev().find('input').prop('checked', true);
        var price = $(this).parent().next().text();
        $(this).parent().next().next().text(count * price);
        totalPrice();
    });
}

//点击删除按钮
function fn5 () {
    $('.del').click(function () {
        var isOk = confirm('您真的不要了吗？');
        if (isOk) {
            $(this).parent().parent().remove();
            totalPrice();
        }
    });
};

// 清空购物车
$('#clear').click(function () {
    var isOk = confirm('你真的要全部清空吗？');
    if (isOk) {
        $('tbody').html('');
        totalPrice();
    }
});


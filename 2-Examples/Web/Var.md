- Biến
+ khai bao: cau truc let/const <name_var> = <giatri>
+ quy tac dat ten bien: (coding convention)
    + let : 
        + ten cua bien bat dau phai viet thuong
        + ten cua bien se phai la tu ghep co nghia, và thể hiện được mục đích của biến đó
        + viet theo dinh dang Camels: userName
        + hạn chế dùng số trong tên biến
    + const:
        + ten bien phai viet hoa het
        + ten cua bien se phai la tu ghep co nghia, và thể hiện được mục đích của biến đó
        + viết theo kiểu MAX_NUMBER
+ data types 
    + Kiểu nguyên thuỷ : 
    number, string, boolean...
    let a = 1 . -> a co data type = number
    let b = "str" . -> a co data type = string
    let c = true/false ->  
    undefined // 

    + Không nguyên thuỷ
    object, array, func
    let user = {
        name: 'asdd',
        age : 20,
        add : 'asdasdasdads'
    } //object
    user.name
    user.age

    let arr1 = [1,2,3] -> data type Array<number>
    arr1[0] . arr1[1] . arr1[2]
    index [0..(arr1.length)]
    let arr2 = ["1","2"]  -> data type Array<string>
    let listUser = [
        {
            name: 'user1',
            age : 20,
            add : 'asdasdasdads'
        },
        {
            name: 'user2',
            age : 20,
            add : 'asdasdasdads'
        },
    ]  data type Array<object>

    function getListUser(){
        //call api lay list user
        callAPI("123")
        callAPI("1")
        //render listuser ra UI
        renderListUser()
    } 

    function callAPI(params){
        console.log(params) -> "123"
        //saasdasd
    }
    function _renderListUser(){
       // saasdasd
    }
    
    //ES6
    ARROW FUNCTION:
    const _renderListUser = () => {}
    

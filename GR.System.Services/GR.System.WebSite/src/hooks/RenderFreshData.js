

const RenderFreshData = {

    SetIdSelect (id,productcontextId,setProductContextId,){
        localStorage.setItem("contextIdProduct", JSON.stringify({ idSelectProduct: id }));
        setProductContextId({
                ...productcontextId,
                'idSelectProduct': id
            });
    },
    GetIdSelect (){
        return JSON.parse(localStorage.getItem("contextIdProduct"));
    },
    SetIdCar (id,quantity,productcontextId,setProductContextId,){
        
    },
    GetIdCar (productcontextId,setProductContextId){
          
    }

}

export default RenderFreshData;
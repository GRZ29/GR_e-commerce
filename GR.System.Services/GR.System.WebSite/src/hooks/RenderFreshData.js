

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
        localStorage.setItem("contextIdProduct", JSON.stringify({ idSelectProduct: id }));
        setProductContextId({
                ...productcontextId,
                'idSelectProduct': id
            });
    },
    GetIdCar (productcontextId,setProductContextId){
        if(productcontextId.idSelectProduct===0){
            const item = JSON.parse(localStorage.getItem("contextIdProduct"));
            setProductContextId(item);
            
        }   
    }

}

export default RenderFreshData;
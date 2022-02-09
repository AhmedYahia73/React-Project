import './Pages.css';

let Pages = ({start, end, active}) => {
    let arr = [];
    for (let i = start; i < end; i++) {
        let block ;
        if(i == start){
            block = (<div className='active PageNum text-center'>
                <i class="fas fa-angle-double-right"></i>
            </div>);
        }else if(i == end){
            block = (<div className='active PageNum text-center'>
                <i class="fas fa-angle-double-left"></i>
            </div>);
        }


        if(i == active){

            block = (<div className='active PageNum text-center'>
                {{ i }}
            </div>);
        }else{

            block =  i;
        }
        arr.push(block);
    }
    return(
        <div className='d-flex'>
            <div className='PageNum text-center'>
            { arr }
            </div>
        </div>
    )
}

export default Pages;
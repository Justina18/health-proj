import React,{useRef} from 'react'
import Swal from 'sweetalert2'
import './Dashboard.css'
import {MdCancel} from 'react-icons/md'

const Dash = ({ Todo, update }) => {

    const ref = useRef(null);
    let Total = Todo.length
    let Completed = 0
    let Pending = 0
    Todo.map((item) => {
        item.checkers ? Completed += 1 : Pending += 1
    })


    const setChecked = (id) => {
        const newArr = Todo.map((i) => i.id === id ? { ...i, checkers: !i.checkers } : { ...i });
        update({ type: "checked", payload: { Check: newArr } })
    }


    const HandleDelete = (item) => {
        let newList = Todo.filter((val) => { return val.id !== item.id })
        update({ type: "checked", payload: { Check: newList } })
    }

  return (
    
                <div className="Card">
            <div className='Card-holder'>
                <div className="texts">
                    <h2>UPCOMING APPOINTMENTS</h2>
                    <p>All upcoming appointments</p>
                    <div className="text1">
                        <p>{Total} Total, {Completed} Complete and {Pending} Pending</p>
                        
                    </div>


                </div>
                <div className="card">
                    <div className="card_head">
                        <div className='card_top'>
                            <div className='wrap'>
                                <div className='top-parent'>
                                    <p>Date/Time</p>
                                    <p>Patient</p>
                                <p> Status</p></div>
                            </div>
                        </div>
                    </div>

        <div className='scroll'>
             {Todo?.map((item, index) => 
             <div key={index} className="Main_card">
                 <div className='Main_cardtop' style={{ backgroundColor: item.checkers === true ? '#9EBCEA' : "#D9D9D9" }} >
                     <div className='wrap'>
                        <div className='top-parent'>
                            <input
                                className='checkbox'
                                type="checkbox"
                                ref={ref}
                                onChange={() => setChecked(item.id)}
                            />
                            <p>{item.todo}</p>
                        
                                <div className='status'><p>{item.checkers ? "completed" : "pending"}
                                        </p>
                                        <div className='remove-wrap'
                                            onClick={() => {
                                                  Swal.fire({
                                                    title: 'Are you sure you want to delete this appointment?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText : 'Yes, delete it!',
                                                    
                                                  }).then((result) => {
                                                    if (result.isConfirmed) {
                                                     { HandleDelete(item) } 
                                                      Swal.fire(
                                                        'Deleted!',
                                                        'Your file has been deleted.',
                                                        'success'
                                                      )
                                                    }
                                                  })
                                                }}>
                                        <MdCancel color='red'/>
                                         </div>
                                </div>
                                 </div>
                     </div>
                </div>
             </div>)}
     </div>

</div>
    </div>
    </div>
  )
}

export default Dash;
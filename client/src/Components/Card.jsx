import { useNavigate } from "react-router-dom"
import DivElement from "./DivElement"
import EditUser from "../pages/EditUser"
import { useState } from "react"
import DeleteUser from "../pages/DeleteUser"

const Card = ({ data, deleteStatus = 0 }) => {
    const navigate = useNavigate()
    const [editClick, setEditClick] = useState(false);
    const [deleteClick, setDeleteClick] = useState(false);
    const [singleCustomer, setSingleCustomer] = useState(null);
    const renderElement = (customer, index) => {
        let renderedElement;
        if(!editClick) {
            renderedElement = <div key={index} className="flex flex-col bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]  text-start lg:p-3 p-1 gap-y-1 transition-all duration-300 hover:scale-105 rounded-3xl">
            <DivElement data={customer.name} heading="Name: "/>
            <DivElement data={customer.phone} heading="Phone Number: "/>
            <DivElement data={customer.area} heading="Area: "/>
            <DivElement data={customer.number} heading="Box Number: "/>
            <DivElement data={customer.monthlyCharge} heading="Monthly Charge: "/>
            <DivElement data={customer.pendingAmount} heading="Pending Amount: "/>
            <button onClick={() => {
                setEditClick(true);
                setSingleCustomer(customer)
            }} className="bg-white p-2 rounded-lg font-normal transition-all duration-300 hover:scale-105 w-full mx-auto mt-4">EDIT</button>
            <button onClick={() => {
                setDeleteClick(true);
                setSingleCustomer(customer)
            }} className="bg-red-600 text-white p-2 rounded-lg font-normal transition-all duration-300 hover:scale-105">DELETE</button>
        </div>
        }
        return renderedElement
    }

    const decideEdit = () => {
        if(editClick) {
            return <EditUser 
                        id={singleCustomer._id} 
                        name={singleCustomer.name}
                        phone={singleCustomer.phone}
                        area={singleCustomer.area}
                        number={singleCustomer.number}
                        monthlyCharge={singleCustomer.monthlyCharge}
                        pendingAmount={singleCustomer.pendingAmount}
                        />
        } else if(deleteClick) {
            return <DeleteUser id={singleCustomer._id} 
                        name={singleCustomer.name}
                        phone={singleCustomer.phone}
                        area={singleCustomer.area}
                        number={singleCustomer.number}
                        monthlyCharge={singleCustomer.monthlyCharge}
                        pendingAmount={singleCustomer.pendingAmount} />
        } else {
            return <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 transition-all duration-300">
                {
            data.map((customer, index) => {
                    return renderElement(customer, index);
                })
            }
        </div>
        }
    }

    return (
        <div>
            {
                decideEdit()
            }
        </div>
    )
}

export default Card;
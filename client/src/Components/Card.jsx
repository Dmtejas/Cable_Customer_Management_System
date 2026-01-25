import DivElement from "./DivElement"

const Card = ({ data }) => {

    const renderElement = (customer, index) => {
        const renderedElement = <div className="flex flex-col bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]  text-start lg:p-3 p-1 gap-y-1 transition-all duration-300 hover:scale-105">
            <DivElement data={customer.name} heading="Name: "/>
            <DivElement data={customer.phone} heading="Phone Number: "/>
            <DivElement data={customer.area} heading="Area: "/>
            <DivElement data={customer.number} heading="Box Number: "/>
            <DivElement data={customer.monthlyCharge} heading="Monthly Charge: "/>
            <DivElement data={customer.pendingAmount} heading="Pendind Amount: "/>
        </div>

        return renderedElement
    }

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8 transition-all duration-300">
            {
                data.map((customer, index) => {
                    return renderElement(customer, index);
                })
            }
        </div>
    )
}

export default Card;
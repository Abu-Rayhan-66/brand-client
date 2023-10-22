

const Cart = ({cart}) => {
    const {brand, name, photo, price, type, rating, userEmail} = cart || {}
    return (
        <div>
            <img src={photo} alt="" />
        </div>
    );
};

export default Cart;
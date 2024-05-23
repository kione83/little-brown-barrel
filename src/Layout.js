import react from 'react';
import Banner from './Banner';
import Card from './Card';

function Layout(props) {
const {children} = props;

return (
    <div className="App">
        <Banner />
        {children}
    </div>
);
}

export default Layout;
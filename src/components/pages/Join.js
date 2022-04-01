import React from 'react';

/* Just meant to redirect to cns site, I didnt have enough knowledge to redirect it on its own at that time, too lazy to change */
class Join extends React.Component {
    componentDidMount() { window.location.href = "https://dcuclubsandsocs.ie/society/redbrick"; }

    render() {
        return (
            <div>
                <h2>Contact</h2>
            </div>
        )
    }
}

export default Join;
import React from 'react';

const ExampleComponent = (props) => {
    const {firstName, lastName} = props
    
	return (
	<div>
		<p>Example text!</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
	</div>
	)
}

export default ExampleComponent;
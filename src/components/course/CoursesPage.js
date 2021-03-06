import React from 'react';

class CoursesPage extends React.Component {
    constructor(props, context)
    {
        super(props,context);
        this.state ={
            course:{title: null }
        };
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.taraget.value;
        this.setState({course:course});
    }

    render () {
        return ( 
            <div>
                <h1>Courses</h1>
                <h2>Add Course </h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.onTitleChange} />
                <input 
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save" />
            </div>
        );
    }
}

export default CoursesPage;
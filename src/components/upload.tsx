import * as React from 'react';
import axios from 'axios';

export  class Upload extends React.Component<any,any> {
    onChange(e) {
        const file = e.target.files[0];
        var reader = new FileReader();
        //reader.readAsDataURL(file);
        reader.readAsArrayBuffer(file);
        reader.onload = function(e) {
            axios.put("url", this.result,{
                headers: {
                    'content-type': 'application/json'
                },
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        　       
       }; 
    }
    render() {
        return(
            <input type="file" onChange={this.onChange} />
        )
    }
}
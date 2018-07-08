import React, { Fragment } from 'react';


const detailPage = ({ item, onClose }) =>
    <Fragment>
        <button type="button" class="btn btn-default btn-md" onClick={onClose}>
          <h3 class="button_text"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back</h3>
        </button>

        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <img className="responsive_img" alt="item_image" src={item.image} />
          </div>
          <div class="col-sm-6 col-xs-12">
            <h1>Chinese Zodiac - {item.name}</h1>
            <h3>Years of the {item.name}:</h3>
            <p>{item.years}</p>
            <h3>Summary:</h3>
            <p>{item.description}</p>
          </div>
        </div>
    </Fragment>

export default detailPage;
import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-young-woman-with-straw-hat-posing-against-black-surface_93675-111604.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://w0.peakpx.com/wallpaper/360/345/HD-wallpaper-men-model-man.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/premium-photo/clothing-accessories-men-women-ready-travel-life-style_11304-1345.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img
                src="https://img.freepik.com/premium-photo/clothing-accessories-men-women-ready-travel-life-style_11304-1345.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Shoes
                </Link>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React, { Component } from "react";
import { connect } from "react-redux";
import { pageRequest,pageSuccess,pageFailure } from "../../store/Pagination/paginationAction";
import CategoryComp from "./category.component";

const mapStateToProps =(state)=>{
  console.log(state)
return{
  contentdata:state.page.contentdata,
  currentPage:state.page.currentPage,
  postPerPage:state.page.postPerPage,
  pagination:state.page.pagination,
}
}
const mapDispatchToProps =(dispatch)=>{
  console.log(dispatch)
  return{
    pageRequest:()=>dispatch(pageRequest()),
    pageSuccess:(data)=>dispatch(pageSuccess(data)),
    pageFailure:(error)=>dispatch(pageFailure(error)),
  }
}

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categoryArr: [],
      cat: "",
      Adddata: false,
      handleToast: false,
      editData: false,
      id: "",
      title: "",
      price: "",
      stock: "",
      brand: "",
      category: "",
      loading: true,
      handleErrors: {
        dataEntry: false,
        dataFound: true,
      },   pagination:{
        pageNumberLimit:5,
        maxPageLimit:5,
        minPageLimit:0,
      },
      searchItem: "",
    };
  }

  shouldComponentUpdate() {
    return true;
  }
  // setting States

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };

  // toggling add button state

  handleAddButton = (e) => {
    e.preventDefault();
    this.setState((prevstate) => ({
      Adddata: !prevstate.Adddata,
      handleErrors: {
        dataEntry: false,
      },
    }));
  };

  // handling  pagination page numbers

  handleClick = (pageNumber) => {
    const dat = pageNumber.target.id;
    this.setState({ currentPage: JSON.parse(dat) });
  };

  // handle exit
  handleExit = (e) => {
    e.preventDefault();
    this.setState((prevstate) => ({
      editData: !prevstate.editData,
      handleErrors: {
        dataEntry: false,
      },
    }));
  };
  // handle Edit

  handleEdit = (id) => {
    const data = this.state.data;
    data.filter((item) => {
      if (item.id === id) {
        this.setState((prevstate) => ({
          editData: !prevstate.editData,
          id: item.id,
          title: item.title,
          price: item.price,
          stock: item.stock,
          brand: item.brand,
          category: item.category,
        }));
        return true;
      }
      return false;
    });
  };

  //Handling form Submit

  handleSubmit = (e) => {
    console.log("clicked");
    const title = this.state.title;
    const price = this.state.price;
    const stock = this.state.stock;
    const brand = this.state.brand;
    const category = this.state.category;
    if (
      title === "" ||
      price === "" ||
      stock === "" ||
      brand === "" ||
      category === ""
    ) {
      if (this.state.Adddata === true) {
        this.setState({ handleErrors: { dataEntry: true } });
      }
    } else {
      this.addData();
      this.setState({
        handleToast: true,
      });
      setTimeout(() => {
        this.setState({
          handleToast: false,
        });
      }, 6000);
    }
    e.preventDefault();
  };

  // Inserting new data into db

  addData() {
    const data = {
      title: this.state.title,
      price: this.state.price,
      stock: this.state.stock,
      brand: this.state.brand,
      category: this.state.category,
    };
    fetch("http://localhost:4001/products", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            price: "",
            title: "",
            stock: "",
            brand: "",
            category: "",
            Adddata: false,
          });
        }
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });
  }

  // Update user data

  UpdateData(id) {
    const data = {
      title: this.state.title,
      price: this.state.price,
      stock: this.state.stock,
      brand: this.state.brand,
      category: this.state.category,
    };
    fetch("http://localhost:4001/products/" + id, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            title: "",
            price: "",
            stock: "",
            brand: "",
            category: "",
            editData: false,
            Adddata: false,
          });
          this.getData();
        }
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });
  }

  // handle update data
  handleUpdate = (e) => {
    const id = this.state.id;
    const Title = this.state.title;
    const Price = this.state.price;
    const stock = this.state.stock;
    const brand = this.state.brand;
    const category = this.state.category;
    if (
      Title === "" ||
      Price === "" ||
      stock === "" ||
      brand === "" ||
      category === ""
    ) {
      if (this.state.editData === true) {
        this.setState({ handleErrors: { dataEntry: true } });
      }
    } else {
      this.UpdateData(id);
      this.setState({
        handleToast: true,
      });
      this.getData();
      setTimeout(() => {
        this.setState({
          handleToast: false,
        });
      }, 5000);
    }
    e.preventDefault();
  };

  //  Deleting entry from db
  handleDelete = (id, currentposts) => {
    if (currentposts.length === 1 || "1") {
      this.setState((prev) => ({
        currentPage: prev.currentPage - 1,
      }));
    }
    fetch("http://localhost:4001/products/" + id, {
      method: "delete",
    })
      .then((res) => {
        this.setState({
          handleToast: true,
        });
        setTimeout(() => {
          this.setState({
            handleToast: false,
          });
        }, 5000);
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });
  };

  Funccategory = () => {
    const itemReq = this.state.cat;
    if (itemReq !== "") {
      const result = this.state.data.filter((currentItem) => {
        return currentItem.category === itemReq;
      });
      this.setState({
        categoryArr: result,
        loading: false,
      });
    }
    if (itemReq === "") {
      this.setState({
        categoryArr: this.state.data,
        loading: false,
      });
    }
  };

  handleCategoryChange = (event) => {
    this.setState(
      {
        cat: event.target.value,
      },
      () => {
        this.Funccategory();
      }
    );
    event.preventDefault();
  };

  getData() {
    const {pageRequest,pageSuccess,pageFailure}=this.props;
    pageRequest();
    fetch("http://localhost:4001/products")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data:res,
          loading:false,
        })
        pageSuccess(res)
        this.Funccategory();
      }).catch((e)=>{
        pageFailure(e.message)
      });
  }

  // Binding Functionalities

  handleFunctions = {
    handleCategoryChange: this.handleCategoryChange.bind(this),
    handleClick: this.handleClick.bind(this),
    handleEdit: this.handleEdit.bind(this),
    handleChange: this.handleChange.bind(this),
    handleSubmit: this.handleSubmit.bind(this),
    handleAddButton: this.handleAddButton.bind(this),
    handleExit: this.handleExit.bind(this),
    handleUpdate: this.handleUpdate.bind(this),
    handleDelete: this.handleDelete.bind(this),
  };



  componentDidMount() {
    this.getData();
  }
  render() {
    const lastPostIndex = this.props.currentPage * this.props.postPerPage;
    const firstPostIndex = lastPostIndex - this.props.postPerPage;
    const currentposts = this.state.categoryArr.slice(
      firstPostIndex,
      lastPostIndex
    );
    const totalPosts = this.state.categoryArr.length;
    return (
      <>
        <CategoryComp
          {...this.state}
          {...this.handleFunctions}
          lastPostIndex={lastPostIndex}
          firstPostIndex={firstPostIndex}
          currentposts={currentposts}
          totalPosts={totalPosts}
        />
      </>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Category)

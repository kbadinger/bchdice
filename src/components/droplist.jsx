import { JsonRpc } from "eosjs";
import { deserialize, ObjectSchema } from "atomicassets";
import React from "react";
import {
  Button,
  Card,
   Link,
  CardHeader,
  Typography,
  CardContent,
  Grid, 
} from "@material-ui/core";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./droplist.css";
 
const defaultState = {
  activeUser: null,
  accountName: "",
  dropItems: "",
  drops: [],
  statusDisplay: "",
  loading: false,
};

var ourNetwork = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [{ protocol: "https", host: "chain.wax.io", port: "" }],
};

const picture = {
  height: "250px",
  width: "150px",
};

const cardstyleGreen = {
  border: 10,
  borderColor: "green",
  borderStyle: "solid",
};

const cardstyleRed = {
  border: 10,
  borderColor: "red",
  borderStyle: "solid",
};
 

class DropListApp extends React.Component {
  static displayName = "BCH Draco collection";

  constructor(props) {
    super(props);
    this.state = {
      ...defaultState,
      rows: [],
      drops: [],
      ctr: 0,
      have: 0,
      rpc: new JsonRpc(
        `${ourNetwork.rpcEndpoints[0].protocol}://${ourNetwork.rpcEndpoints[0].host}`
      ),
    };

    this.renderModalButton = this.renderModalButton.bind(this);
    this.handleDropUpdate = this.handleDropUpdate.bind(this);
    this.searchDrop = this.searchDrop.bind(this);

    this.renderDropForm = this.renderDropForm.bind(this);
    this.buyDrop = this.buyDrop.bind(this);
 
    this.partition = (str, n) => {
      var aa = [];
      var i, l;
      for (i = 0, l = str.length; i < l; i += n) {
        aa.push(str.substr(i, n));
      }
      return aa;
    };
  }

  componentDidMount() {
    console.log("run");

    this._asyncRequest = this.state.rpc
      .get_table_rows({
        json: true,
        code: "atomicassets",
        scope: "dracodice",
        table: "templates",
        lower_bound: "356879",
        limit: 1000,
        reverse: false,
        show_payer: false,
      })
      .then((resp) => {
        this._asyncRequest = null;

        var ctr = 0;

        for (let itemNdx in resp.rows) {
          let item = resp.rows[itemNdx];

          if (item.schema_name === "bcheroes1") {
            ctr++;

            let os = ObjectSchema([
              { name: "name", type: "string" },
              { name: "img", type: "image" },
              { name: "series", type: "string" },
              { name: "rarity", type: "string" },
              { name: "material", type: "string" },
              { name: "style", type: "string" },
              { name: "face values", type: "string" },
              { name: "gameimg", type: "image" },
              { name: "video", type: "string" },
              { name: "shape", type: "string" },
            ]);
            let deserializedData = deserialize(
              item.immutable_serialized_data,
              os
            );

            item.name = deserializedData.name;
            item.numberHad = 0;

            // console.log(item);

            item.imgTag = "https://ipfs.io/ipfs/" + deserializedData.img;

            this.state.drops.push(item);
          }
        }

        this.setState((state) => ({
          ...this.state,
          ctr: ctr,
          drops: this.state.drops,
        }));
      });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  async buyDrop(buyId, pri) {
    this.buyClaimContract(buyId, pri);
  }

  componentDidUpdate() {
  
 
  }

  renderLogoutBtn = () => {};

  renderModalButton() {
    return <p className="ual-btn-wrapper"></p>;
  }

  handleDropUpdate = (event) => {
    let etv = event.target.value;

    this.setState((state) => ({
      ...this.state,
      dropItems: etv,
    }));
  };

  searchDrop = async (event) => {
    var lb = "0";

    var newAsset = "1";

    var haveCollection = {};

    this.setState((state) => ({
      ...this.state,
      loading: true}));

    while (lb !== newAsset) {
      newAsset = lb;

      let resp = await this.searchAssets(lb);

      for (let itemNdx in resp.rows) {
        
          lb = resp.rows[itemNdx].asset_id;

          var tid = resp.rows[itemNdx].template_id;

          const searchIndex = this.state.drops.findIndex(
            (d) => d.template_id === resp.rows[itemNdx].template_id
          );

          if (searchIndex >= 0) {
            let itm = this.state.drops[searchIndex];
            itm.numberHad++;

            haveCollection[tid] = 1;
            this.state.drops[searchIndex] = itm;
            this.setState((state) => ({
              ...this.state,
              have: Object.keys(haveCollection).length,
              drops: this.state.drops.sort(function(a, b){return a.numberHad-b.numberHad}),
            }));
          }
       
      }
    }


    this.setState((state) => ({
      ...this.state,
      loading: false}));


  };

  async searchAssets(startingAsset) {
    let resp = await this.state.rpc.get_table_rows({
      json: true,
      code: "atomicassets",
      scope: this.state.dropItems,
      table: "assets",
      lower_bound: startingAsset,
      limit: 1000,
      reverse: false,
      show_payer: false,
    });

    return resp;
  }
 

  renderDropForm = () => {
    const { dropItems } = this.state;

   
    return (
      <div>
        {this.state.loading ?
<div style={{position: "absolute", backgroundPosition: "center", zIndex: "100", top: "50px", width: '100%', height: '400px', backgroundRepeat: 'no-repeat', backgroundImage: 'url(Square-1s-200px.gif)'}}></div>
: ''}
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          marginTop: "40px",
          display: "table",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            position: "relative",
            verticalAlign: "middle",
            width: "100%",
            display: "table-cell",
          }}
        >
          <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
            Draco Dice BCH Physical Collection Tools
          </h2>

          <div
            style={{ width: "550px", margin: "auto", verticalAlign: "middle" }}
          >
            <Form>
              <Form.Group controlId="dropItems">
                <div style={{ width: "150%" }}>
                  <div style={{ width: "300px", float: "left" }}>
                    <Form.Control
                      type="text"
                      name="dropItems"
                      placeholder="Wallet"
                      value={dropItems}
                      onChange={this.handleDropUpdate}
                    />
                  </div>
                  <div style={{ marginLeft: "305px" }}>
                    <Button onClick={this.searchDrop} variant="contained">
                      Search
                    </Button>
                  </div>
                </div>
              </Form.Group>

              <Typography variant="subtitle2" component="h2">
                {this.state.statusDisplay}
              </Typography>
            </Form>
          </div>

          <div
            style={{
              margin: "auto",
              textAlign: "center",
              verticalAlign: "middle",
              paddingBottom: "50px",
              paddingTop: "25px",
              width: "900px",
            }}
          >
            <h3>
              BCH Collection Draco Dice (Have {this.state.have} of{" "}
              {this.state.ctr})
            </h3>
            <Grid container spacing={4}>
              {this.state.drops.map(function (item, i) {
                var desc = item.name;

                var have = item.numberHad;

                
                let img = "";

                if (item.imgTag != null && item.imgTag.length > 0) {
                  img = <img style={picture} src={item.imgTag}  alt="bch dice" />;
                }

                return (
                  <Grid item xs={12} sm={6} md={4} key={item.drop_id}>
                    <div style={{ cursor: 'pointer'}} onClick={() => window.open('https://wax.atomichub.io/market?collection_name=dracodice&order=asc&schema_name=bcheroes1&sort=price&symbol=WAX&template_id=' + item.template_id, '_blank')}> 
                    <Card  style={have > 0 ? cardstyleGreen : cardstyleRed}>
                      <CardHeader
                        title={item.collection_name ?? ""}
                        subheader={item.drop_id ?? ""}
                      />
                      <CardContent>
                        {img}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {desc}
                          <br />
                          Number of Assets: {have}
                        </Typography>
                      </CardContent>
                    </Card>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
        </div> </div>
   
   
   );
  };

  render() {
    return this.renderDropForm();
  }
}

export default DropListApp;

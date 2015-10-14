var TodoError = React.createClass({
    getInitialState() {
        return { show: true };
    },
    close() {
        this.setState({ show: false});
    },
    render() {
        return (
          <div className="modal-container" style={{height: 200}}>
            <ReactBootstrap.Modal
              show={this.state.show}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <ReactBootstrap.Modal.Header closeButton>
                <ReactBootstrap.Modal.Title id="contained-modal-title">Contained Modal</ReactBootstrap.Modal.Title>
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </ReactBootstrap.Modal.Body>
              <ReactBootstrap.Modal.Footer>
                <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
              </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
          </div>
        )
      }
});


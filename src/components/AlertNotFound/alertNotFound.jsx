import { Card, CardHeader, CardText, CardBody } from 'reactstrap';

// Card que aparece quando não há nenhum retorno
function AlertNotFound () {

  return(
        <Card
          className='m-4'
          >
          <CardHeader
            tag="h3"
            className='d-flex justify-content-between'
            >
              Tool not found!
          </CardHeader>
          <CardBody>
            <CardText>
              This tool was not found on the server.
            </CardText>
          </CardBody>
        </Card>
  )
}

export default AlertNotFound

import React from 'react'
import StatsCard from './StatsCard'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

export default function Dashboard() {
  return (
    <div className="dashboard-main-container">
      <div className='dashboard-container'>
        <div className='dashboard'>
          <StatsCard
            img='images/white-copy.svg'
            title='Total Campaigns'
            value='56'
          />
          <StatsCard
            img='images/white-views.svg'
            title='Total Views'
            value='123567'
          />
          <StatsCard
            img='images/white-comments.svg'
            title='Total Comments'
            value='8354'
          />
          <StatsCard
            img='images/white-likes.svg'
            title='Total Likes'
            value='61064'
          />
        </div>
        <h3 className='last-campaign'>Last Campaign</h3>
        <div className='dashboard'>
          <StatsCard
            img='images/white-user.svg'
            title='Participants'
            value='94'
          />
          <StatsCard img='images/white-views.svg' title='Views' value='70566' />
          <StatsCard
            img='images/white-comments.svg'
            title='Comments'
            value='1676'
          />
          <StatsCard img='images/white-likes.svg' title='Likes' value='2456' />
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col' className='font-weight-bold'>
                Sr.
              </th>
              <th scope='col' className='font-weight-bold'>
                Campaign Title
              </th>
              <th scope='col' className='font-weight-bold'>
                Started On
              </th>
              <th scope='col' className='font-weight-bold'>
                Initiated By
              </th>
              <th scope='col' className='font-weight-bold'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1.</th>
              <td>Mark</td>
              <td>21 February 2021</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>2.</th>
              <td>Jacob</td>
              <td>16 January 2021</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>3.</th>
              <td>Mark Doe</td>
              <td>06 January 2021</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Sundar Nadela</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>5.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
            <tr>
              <th scope='row'>4.</th>
              <td>Larry the Bird</td>
              <td>27 December 2020</td>
              <td>Nasir Ali</td>
              <td>
                <EditIcon /> &emsp; <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

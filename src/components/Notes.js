import { Link } from 'react-router-dom';
import {
  Paper,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <TableContainer component={Paper}>
      <TableBody>
        {notes.map((note) => (
          <TableRow key={note.id}>
            <TableCell>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </TableCell>
            <TableCell>{note.user}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  </div>
);

export default Notes;

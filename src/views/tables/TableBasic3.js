import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Magnify from 'mdi-material-ui/Magnify';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';


const TableBasic3 = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* ... (el código anterior sigue igual) */}

      {/* Pantalla emergente */}
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {selectedRow && (
            <div>
              <h2 >INSTRUCCIONES</h2>
              <p>Cada postulante podrá aplicar exclusivamente a un puesto por convocatoria.</p>
              <p>Una vez que aplique a un puesto la o el postulante no podrá modificar el registro "" para el puesto postulado.</p>
              <p>No se admitirán postulaciones (solicitud y documentos de respaldo) con manchas, tachones o cualquier otro tipo de alteraciones, que no permita la lectura comprensible o ponga en duda el contenido.</p>
              <p>No se admitirá postulaciones fuera del calendario y horario establecido quedando automáticamente descartados.</p>
              <p>Recuerde:</p>
              <p>El registro de información en la sección Hoja de vida es obligatoria según corresponda.</p>
              <Button onClick={handleAccept} variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
                Regresar
              </Button>
              <Button onClick={handleCloseModal} variant="contained" color="secondary" sx={{ marginTop: '1rem' }}>
                Cerrar
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableBasic3;

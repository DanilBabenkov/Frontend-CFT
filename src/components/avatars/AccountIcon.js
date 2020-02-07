import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const ProfColor = "primary";

export default function AccountIcon() {
 

  return (
    <div>
     <AccountCircleIcon color={ProfColor} style={{ fontSize: 150,}}/>
    </div>
  );
}
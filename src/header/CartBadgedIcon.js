import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({theme}) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function CartBadgedIcon({cart}) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.reduce((a, b) => Number(a) + Number(b.quantity), 0)} showZero color="warning">
        <ShoppingCartIcon sx={{fontSize: 35}} color="primary" />
      </StyledBadge>
    </IconButton>
  );
}


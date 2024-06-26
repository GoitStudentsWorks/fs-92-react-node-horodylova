import Modal from 'react-modal';
import EditModalstyles from './EditModal.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWater } from '../../../redux/water/waterOperations';
import { selectDayWaterList } from '../../../redux/Calendar/calendarSelectors';
import { ReactComponent as DrinkIcon } from '../../../Icons/drink.svg';
import { ReactComponent as CloseIcon } from '../../../Icons/close.svg';
import { ReactComponent as MinusIcon } from '../../../Icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../Icons/plus.svg';
import { toast } from 'react-toastify';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    padding: '0',
    position: 'initial',
    width: '100%',
  },
};

const EditModal = ({ isOpen, onRequestClose, waterId }) => {

  const dispatch = useDispatch();

  const todayWaters = useSelector(selectDayWaterList);

  const water = todayWaters.find((item) => item._id === waterId);

  const [ml, setMl] = useState(Number(water.value));
  const [time, setTime] = useState(water.time);

  // вивід часу у форматі AM/PM
  const formatTime = (time) => {
    let [hours, minutes] = time.split(':');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours >= 13 ? hours - 12 : hours;
    return `${hours}:${minutes} ${period}`;
  };

  const handleInput = (e) => {
    const { value } = e.currentTarget;
    
     if (!isNaN(value) && value > 0 && value < 5001) {
       setMl(value);
     }
  };

  const handleInputTime = (e) => {
    setTime(e.currentTarget.value);
  }

  const handleMinusClick = () => {
    if (ml >= 100) {
      setMl(Number(ml) - 50);
    }
    if (ml < 100) {
      setMl(50);
    }
  };

  const handlePlusClick = () => {
    if (ml > 4950) {
      setMl(5000);
    }
    else {
      setMl(Number(ml) + 50);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onRequestClose();

    const data = {
      id: waterId,
      value: Number(e.target.ml.value),
      time: e.target.time.value,
    };

    try {
      await dispatch(editWater(data)).unwrap();
      toast.success('Your entry was changed');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      style={modalStyle}
      contentLabel="EditWater Modal"
    >
      <form onSubmit={handleSubmit}>
        <EditModalstyles.Container>
          <EditModalstyles.TitleContainer>
            <p>Edit the entered amount of water</p>
            <button onClick={onRequestClose}>
              <CloseIcon width="24" height="24" />
            </button>
          </EditModalstyles.TitleContainer>
          <EditModalstyles.WaterPortionWrapper>
            <DrinkIcon width="36" height="36" />
            <p className="ml">{ml}ml</p>
            <p className="time">{formatTime(time)}</p>
          </EditModalstyles.WaterPortionWrapper>
          <EditModalstyles.EnteredData>
            <p className="title">Correct entered data:</p>
            <p className="subtitle">Amount of water:</p>
            <div className="waterControllers">
              <button
                type="button"
                onClick={handleMinusClick}
                disabled={ml <= 50}
              >
                <MinusIcon width="24" height="24" />
              </button>
              <div className="ml">{ml} ml</div>
              <button
                type="button"
                onClick={handlePlusClick}
                disabled={ml >= 5000}
              >
                <PlusIcon width="24" height="24" />
              </button>
            </div>
          </EditModalstyles.EnteredData>
          <EditModalstyles.Label>
            Recording time:
            <EditModalstyles.Input
              type="time"
              name="time"
              value={time}
              step="300"
              onChange={handleInputTime}
            />
          </EditModalstyles.Label>
          <EditModalstyles.Label size="large">
            Enter the value of the water used:
            <EditModalstyles.Input
              type="number"
              name="ml"
              value={ml}
              min="1"
              minLength="1"
              maxLength="4"
              onChange={handleInput}
            />
          </EditModalstyles.Label>
          <EditModalstyles.SaveButtonWrapper>
            <p style={{ minWidth: '50px' }}>{ml}ml</p>
            <button type="submit">Save</button>
          </EditModalstyles.SaveButtonWrapper>
        </EditModalstyles.Container>
      </form>
    </Modal>
  );
};

export default EditModal;

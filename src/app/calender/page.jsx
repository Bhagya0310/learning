'use client'

import React from 'react';
const Calendar = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="flex flex-col items-center text-center text-3xl font-bold mb-4">Calendar</h1>
      <div className="month bg-green-500 text-white text-center p-4 mb-4">
        <div className="flex justify-between mb-4">
          <span className="prev cursor-pointer">&#10094;</span>
          <span>Agust 2021</span>
          <span className="next cursor-pointer">&#10095;</span>
        </div>
        <ul className="weekdays flex justify-between mb-4">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>
        <ul className="days grid grid-cols-7 gap-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li><span className="active bg-green-500 text-white p-1">10</span></li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
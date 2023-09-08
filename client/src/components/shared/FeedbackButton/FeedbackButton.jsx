import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@apollo/client";
import { UPDATE_FEEDBACK_COUNT } from "../../../graphql/mutations";
import { CustomTooltip as Tooltip, LoadingOverlay } from "../../../components";
import { useToast } from "../../../hooks/ToastContext";
import styles from "./FeedbackButton.module.css";

function FeedbackButton({ icon, value, postId }) {
  const [updateFeedbackCount, { loading: mutationLoading, error: mutationError }] =
    useMutation(UPDATE_FEEDBACK_COUNT);
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false);
  const { setToast } = useToast();

  const handleFeedback = async ({ value }) => {
    const response = await updateFeedbackCount({
      variables: { postId, value },
    });

    if (!response.data.updateFeedbackCount.success) {
      setToast({
        message: response.data.updateFeedbackCount.message,
        type: "error",
        duration: 5000,
      });
    } else {
      setToast({
        message: response.data.updateFeedbackCount.message,
        type: "notification",
        duration: 5000,
      });

      localStorage.setItem(`feedback-${postId}`, value);
      setHasGivenFeedback(true);
    }
  };

  useEffect(() => {
    const existingFeedback = localStorage.getItem(`feedback-${postId}`);
    if (existingFeedback) {
      setHasGivenFeedback(true);
    }
  }, [postId]);

  return (
    <>
      {mutationLoading && <LoadingOverlay />}
      <button
        className={styles.feedbackButton}
        onClick={() => handleFeedback({ value })}
        data-tooltip-id="feedbackTooltip"
        data-tooltip-content={hasGivenFeedback ? "You've already provided feedback!" : ""}
        disabled={hasGivenFeedback || mutationLoading}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
      <Tooltip id="feedbackTooltip" />
    </>
  );
}

export default FeedbackButton;
